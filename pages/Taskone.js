import Navbar from './components/Navbar'
import Image from 'next/image'
function Taskone() {
    return (
        <div>
            <br/><br/>
            
            <Image src="/vercel.svg" height={200} width={200}/>
            <center><h1> Rishabh Vercel Assignment</h1> </center>
            <Navbar />
            <h2>Things a Product Advocate might do</h2><br></br>
            <h3>Most Interested</h3>
            <p>1: Hop on a Zoom call to do a product demo</p>
            <p>2: Work with the Team to make sure email tone is consistent with the Vercel brand</p>
            <p>3: Analyze sales inquiries to help spot trends in needs</p>

            <h3>Least Interested</h3>
            <p>1: Organize, Schedule and book meetings for Account Executives with prospects</p>
            <p>2: Evaluate an application to help determine if its commercial or not</p>
            <p>3: Research and organize notes to ensure Account Executives are prepared for calls</p>

        </div>
    );
}
 
export default Taskone;
