import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

const daysOfWeekConst = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
]

const timeConst = [
    "9 AM", "9:30 AM",
    "10 AM", "10:30 AM",
    "11 AM", "11:30 AM",
    "12 PM", "12:30 PM",
    "1 PM", "1:30 PM",
    "2 PM", "2:30 PM",
    "3 PM", "3:30 PM",
    "4 PM", "4:30 PM",
    "5 PM", "5:30 PM",
    "6 PM", "6:30 PM",
]

export default function CalendarBox( { list, serviceColor, daysOfWeek }) {
    const rows = []

    function fillRows() {
        for(let i = 0; i < 20; i++) {
            rows[i] = {}

            rows[i]["id"] = timeConst[i]

            for(let j = 0; j < daysOfWeekConst.length; j++) {
                rows[i][daysOfWeekConst[j]] = "#FFFFFF"
                rows[i][daysOfWeekConst[j] + "Name"] = ""
                rows[i][daysOfWeekConst[j] + "RowSpan"] = 1
            }

            for(let j = 0; j < list.data.length; j++) {
                if(rows[i]["id"] === list.data[j]["end"]) {
                    var blockCount = timeConst.indexOf(list.data[j]["end"]) - timeConst.indexOf(list.data[j]["start"])
                    rows[i - blockCount][list.data[j]["day"]] = list.data[j]["color"]
                    rows[i - blockCount][list.data[j]["day"] + "Name"] = list.data[j]["name"]
                    rows[i - blockCount][list.data[j]["day"] + "RowSpan"] = blockCount
                    for(let k = 1; k <= rows[i][list.data[j]["day"] + "RowSpan"]; k++) {
                        rows[i - k][list.data[j]["day"] + "RowSpan"] = 0
                    }
                }
            }
        }
    }

    fillRows()

    return (
        <TableContainer>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {Object.entries(daysOfWeek).map(([day, date]) => (
                            <TableCell
                                key={day}
                                style={{backgroundColor: serviceColor}}
                                sx={{textAlign: 'center',}}>
                                <Typography
                                    sx={{
                                        color: '#160449',
                                        fontFamily: 'Source Sans Pro',
                                        fontSize: '20px',
                                        fontWeight: 'bold',}}>
                                    {day}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#160449',
                                        fontFamily: 'Source Sans Pro',
                                        fontSize: '30px',
                                        fontWeight: 'bold',
                                        marginTop: '-15px',}}>
                                    {date}
                                </Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}>
                            <TableCell
                                rowSpan={1}
                                sx={{
                                    borderWidth: 0,
                                    borderColor: 'gray',
                                    borderStyle: 'solid',
                                    textAlign: 'center',
                                    margin: 'auto',
                                    maxWidth: 25,}}>
                                <Typography
                                    sx={{
                                        color: '#160449',
                                        fontFamily: 'Source Sans Pro',
                                        fontSize: '15px',}}>
                                    {row.id}
                                </Typography>
                            </TableCell>
                            {row.SunRowSpan !== 0 ?
                                <TableCell
                                    rowSpan={row.SunRowSpan}
                                    sx={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        borderStyle: 'solid',
                                        textAlign: 'center',
                                        color: "#FFFFFF",
                                        maxWidth: 25,
                                        maxHeight: 10,
                                        fontWeight: 'bold',}}
                                    style={{backgroundColor:row.Sun}}>
                                        {row.SunName}
                                </TableCell>
                            : null}
                            {row.MonRowSpan !== 0 ?
                                <TableCell
                                    rowSpan={row.MonRowSpan}
                                    sx={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        borderStyle: 'solid',
                                        textAlign: 'center',
                                        color: "#FFFFFF",
                                        maxWidth: 25,
                                        maxHeight: 10,
                                        fontWeight: 'bold',}}
                                    style={{backgroundColor:row.Mon}}>
                                        {row.MonName}
                                </TableCell>
                            : null}
                            <TableCell
                                rowSpan={row.TueRowSpan}
                                sx={{
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    borderStyle: 'solid',
                                    textAlign: 'center',
                                    color: "#FFFFFF",
                                    maxWidth: 25,
                                    fontWeight: 'bold',}}
                                style={{backgroundColor:row.Tue}}>
                                    {row.TueName}
                            </TableCell>
                            {row.WedRowSpan !== 0 ?
                                <TableCell
                                    rowSpan={row.WedRowSpan}
                                    sx={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        borderStyle: 'solid',
                                        textAlign: 'center',
                                        color: "#FFFFFF",
                                        maxWidth: 25,
                                        fontWeight: 'bold',}}
                                    style={{backgroundColor:row.Wed}}>
                                        {row.WedName}
                                </TableCell>
                            : null}
                            {row.ThuRowSpan !== 0 ?
                                <TableCell
                                    rowSpan={row.ThuRowSpan}
                                    sx={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        borderStyle: 'solid',
                                        textAlign: 'center',
                                        color: "#FFFFFF",
                                        maxWidth: 25,
                                        fontWeight: 'bold',}}
                                    style={{backgroundColor:row.Thu}}>
                                        {row.ThuName}
                                </TableCell>
                            : null}
                            {row.FriRowSpan !== 0 ?
                                <TableCell
                                    rowSpan={row.FriRowSpan}
                                    sx={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        borderStyle: 'solid',
                                        textAlign: 'center',
                                        color: "#FFFFFF",
                                        maxWidth: 25,
                                        fontWeight: 'bold',}}
                                    style={{backgroundColor:row.Fri}}>
                                        {row.FriName}
                                </TableCell>
                            : null}
                            {row.SatRowSpan !== 0 ?
                                <TableCell
                                    rowSpan={row.SatRowSpan}
                                    sx={{
                                        borderWidth: 1,
                                        borderColor: 'gray',
                                        borderStyle: 'solid',
                                        textAlign: 'center',
                                        color: "#FFFFFF",
                                        maxWidth: 25,
                                        fontWeight: 'bold',}}
                                    style={{backgroundColor:row.Sat}}>
                                        {row.SatName}
                                </TableCell>
                            : null}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}