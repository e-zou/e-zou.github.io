// Styling
import '../styles/Resume.css';

// // React
// import {Document, Page} from 'react-pdf';

import PDF from "../images/Emily_Zou_Resume.pdf"



function Resume() {
    return (
        <div class="resume flex center flex-d-col">
            
            <section>
                <h3>Resume</h3>
                <embed 
                    class="pdf"
                    src={PDF}
                    height={800}
                    type="application/pdf"
                ></embed>
            </section>
        </div>
    );

}
export default Resume