import { LineChart, Line } from 'recharts';
const mathMarksData=[
    { "name": "Alice", "mathMarks": 78 },
    { "name": "Bob", "mathMarks": 85 },
    { "name": "Charlie", "mathMarks": 92 },
    { "name": "Diana", "mathMarks": 74 },
    { "name": "Ethan", "mathMarks": 88 },
    { "name": "Fiona", "mathMarks": 69 },
    { "name": "George", "mathMarks": 81 },
    { "name": "Hannah", "mathMarks": 95 },
    { "name": "Ian", "mathMarks": 76 },
    { "name": "Julia", "mathMarks": 90 }
];
const LineChartView = () => {
    return (
        <div>
            <LineChart width={600} height={300} data={mathMarksData}>
                <Line dataKey="mathMarks" />
            </LineChart>            
        </div>
    );
};

export default LineChartView;