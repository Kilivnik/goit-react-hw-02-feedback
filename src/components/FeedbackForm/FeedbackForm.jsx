import React from "react";

class FeedbackForm extends React.Component {
    render() {
        return (
            <>
                <h1>Please leave feedback</h1>
                <ul>
                    <li>
                        <button type="button" onClick={() => (console.log("збільшити"))}>Good</button>
                    </li>
                    <li>
                        <button type="button" onClick={() => (console.log("збільшити"))}>Neutral</button>
                    </li>
                    <li>
                        <button type="button" onClick={() => (console.log("збільшити"))}>Bad</button>
                    </li>
                </ul>
            </>
            
        );
    }
}

export default FeedbackForm;