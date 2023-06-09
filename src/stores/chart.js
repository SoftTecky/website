import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const userChartStore = defineStore("chart", () => {
  const chart_data = ref({
    labels: [
      "Comunicacion efectiva",
      "Trabajo en equipo",
      "Pensamiento critico",
      "Adaptabilidad",
      "Resolucion de problemas",
      "Orientacion al detalle",
    ],
    datasets: [
      {
        label: "Habilidades blandas",
        backgroundColor: "rgba(32,158,217,0.2)",
        borderColor: "rgb(32,158,217)",
        pointBackgroundColor: "rgb(32,158,217)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(32,158,217)",
        data: [],
      },
    ],
  });

  const chart_options = ref({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
  });

  function updateChart(data) {
    chart_data.value.datasets[0].data = data;
  }

  return { chart_options, chart_data, updateChart };
});
