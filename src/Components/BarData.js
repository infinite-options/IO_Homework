import { BorderColor } from "@mui/icons-material";

export const BarChartData = {
    labels:[
        "$ 10000",
        "$ 50000",
        "$ 100000",
        "$ 500000",
        "$ 1000000",
    ],
    datasets: [
        {
            label: "Steps",
            data: [10000, 50000, 100000, 500000, 1000000],
            backgroundColor:["rgba(222, 87, 65, 0.30"],
            borderColor: "rgba(222, 87, 65, 1)",
            borderWidth: 1,
        }
    ]
}