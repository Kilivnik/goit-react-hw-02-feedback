import React from "react";

class StaticRange extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
        
    render() {
        return (
            <>
                <h1>Statistics</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Good:</td>
                            <td>{this.state.good}</td>
                        </tr>
                        <tr>
                            <td>Neutral:</td>
                            <td>{this.state.neutral}</td>
                        </tr>
                        <tr>
                            <td>Bad:</td>
                            <td>{this.state.bad}</td>
                        </tr>
                    </tbody>
                </table>
                
            </>
        );
    }
}

export default StaticRange;