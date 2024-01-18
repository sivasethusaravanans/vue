<template>
  <v-container
    style="
      background-color: rgb(225, 225, 212);
      padding: 20px;
      justify-content: space-around;
    "
  >
    <v-v-column>
      <h1>Asset</h1>
      <v-container></v-container>
      <h5>
        Report based on the asset, will provide information represented about what
        happened.
      </h5>

      <template>
        <v-row>
          <v-col cols="12" sm="4">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="From date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" type="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="4">
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date1"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date1"
                  label="To date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date1" type="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date1)"> OK </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col class="d-flex" cols="12" sm="4">
            <v-select
              v-model="selectedContractType"
              :items="items"
              label="Contract Type"
              solo
            ></v-select>
          </v-col>
        </v-row>
        <v-row style="justify-content: space-between;">
          <v-col></v-col>
          <v-col>
            <v-btn
              class="d-flex"
              @click="generateData"
              style="height: 40px; width: 150px; background-color: green"
            >
              <v-row align="center"  > 
                <h5  style="color: white; text-align: center;">Generate Data</h5>
                <v-icon style="padding-left: 8px; color: white">
                  mdi-folder-text-outline theme--light</v-icon
                >
              </v-row>
            </v-btn>
          </v-col>
          <v-col></v-col>
          <v-col>
          <v-row>
            <v-select
              v-model="selectedDownloadFormat"
              :items="downloadFormats"
              label="Download Format"
              
            ></v-select>
          </v-row>
          </v-col>
          <v-col></v-col>
        </v-row>
      </template>
      <v-container></v-container>
    </v-v-column>

    <v-container style="padding: 20px; justify-content: space-around"> </v-container>
    <v-container
      style="background-color: white; padding: 20px; justify-content: space-around"
    >
      <h3>Kindly select from date and to date, To get the report</h3>

      <!-- Table to display txData -->
      <v-data-table
        id="download-content"
        :items="responseData.txData"
        :headers="tableHeaders"
        :items-per-page="10"
      >
        <template slot="item.walletAddress" slot-scope="{ item }">
          <!-- Truncate wallet address and display a copy button -->
          <div class="d-flex align-center">
            <span>{{ truncateWalletAddress(item.walletAddress) }}</span>
            <v-btn @click="copyToClipboard(item.walletAddress)" x-small>
              <v-icon>mdi-content-copy</v-icon>
            </v-btn>
          </div>
        </template>
        <template slot="item.contractAddress" slot-scope="{ item }">
          <!-- Truncate contract address and display a copy button -->
          <div class="d-flex align-center">
            <span>{{ truncateContractAddress(item.contractAddress) }}</span>
            <v-btn @click="copyToClipboard(item.contractAddress)" x-small>
              <v-icon>mdi-content-copy</v-icon>
            </v-btn>
          </div>
        </template>
        <template v-slot:top>
          <!-- Custom filters or other UI components can be added here -->
        </template>
      </v-data-table>
    </v-container>
  </v-container>
</template>
<script>
import axios from "axios";
import Papa from "papaparse";
import jsPDF from "jspdf";
// import html2canvas from 'html2canvas';
import "jspdf-autotable";

export default {
  data: () => ({
    items: ["ERC-721", "ERC-1155"],
    downloadFormats: ["csv", "pdf"],
    date: new Date().toISOString().substr(0, 7),
    date1: new Date().toISOString().substr(0, 7),
    selectedContractType: null,
    selectedDownloadFormat: null,

    menu: false,
    modal: false,
    responseData: { txData: [] }, // Assuming txData is an array in the response
    tableHeaders: [
      { text: "Wallet Address", value: "walletAddress" },
      { text: "NFT name", value: "nftName" },
      { text: "Token Id", value: "tokenId" },
      { text: "Amount", value: "amount" },
      { text: "Contract", value: "contractAddress" },
      { text: "Type", value: "contractType" },
      { text: "Date", value: "date" },
    ],
  }),

  methods: {
    fetchData() {
      // Format date parameters as per the API's expected format
      const fromDate = this.formatDateForApi(this.date);
      const toDate = this.formatDateForApi(this.date1);

      const apiUrl = "https://nfttest.wowtalkies.com:3200/v1/getTxDatas";
      const queryParams = { fromdate: fromDate, todate: toDate };

      axios
        .get(apiUrl, { params: queryParams })
        .then((response) => {
          let filteredData = response.data.txData;

          console.log("selectedContractType ", this.selectedContractType);
          // Apply contract type filter if it is selected
          if (this.selectedContractType) {
            filteredData = filteredData.filter(
              (item) => item.contractType === this.selectedContractType
            );
          }

          this.responseData = { txData: filteredData };
          // console.log('filtered data ', filteredData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    generateData() {
      this.fetchData();
    },
    downloadData() {
      if (this.selectedDownloadFormat === "csv" && this.responseData.length > 0) {
        this.downloadCSV();
      } else if (this.selectedDownloadFormat === "pdf" && this.responseData.length > 0) {
        this.downloadPDF();
      }
    },

    formatDateForApi(dateString) {
      const date = new Date(dateString);
      const formattedDate = `${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`;
      return formattedDate;
    },
    // Truncate wallet address to first 6 and last 4 characters
    truncateWalletAddress(walletAddress) {
      return walletAddress.substring(0, 6) + "..." + walletAddress.slice(-4);
    },
    truncateContractAddress(contractAddress) {
      return contractAddress.substring(0, 6) + "..." + contractAddress.slice(-4);
    },

    // Copy wallet address to clipboard
    copyToClipboard(walletAddress) {
      const el = document.createElement("textarea");
      el.value = walletAddress;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
    downloadCSV() {
      const csv = Papa.unparse(this.responseData.txData, {
        header: true,
        columns: this.tableHeaders.map((header) => header.value),
        transform: (value, header) => {
          // Format date column based on the header value
          if (header === "date") {
            const date = new Date(value);
            return date.toLocaleDateString("en-GB"); // Adjust the locale as needed
          }
          return value;
        },
      });
      this.downloadFile(csv, "output.csv", "text/csv;charset=utf-8;");
    },
    downloadPDF() {
      const pdf = new jsPDF();
      pdf.text("Table Data to PDF Example", 20, 10);

      // Add table headers to the PDF
      const headers = this.tableHeaders.map((header) => header.text);

      // Add table data to the PDF using autoTable
      pdf.autoTable({
        head: [headers],
        body: this.responseData.txData.map((row) =>
          this.tableHeaders.map((header) => row[header.value])
        ),
        // startY: 20,
      });

      // Download the PDF
      this.downloadFile(pdf.output("blob"), "output.pdf", "application/pdf");
    },

    downloadFile(data, filename, type) {
      const blob = new Blob([data], { type });
      const link = document.createElement("a");

      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    },
  },
  watch: {
    selectedDownloadFormat: function (newFormat, oldFormat) {
      if (newFormat && newFormat !== oldFormat) {
        // Format has changed, trigger the download
        this.downloadData();
      }
    },
  },
};
</script>
