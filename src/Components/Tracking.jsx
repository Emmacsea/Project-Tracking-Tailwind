import logo from "../assets/images/logo.svg";
import illustrate from "../assets/images/illustration-devices.svg";

export default function Tracking () {
    return (
        <div className="flex justify-center items-center bg-white h-screen w-full">
            <div className="flex flex-col justify-center items-center w-full">
                <header className="flex justify-between items-center w-full mt-7 px-36">
                    <div><img src={logo} alt="" /></div>
                    
                    <ul className="flex space-x-7">
                        <li className="lin"><a href="">Product</a></li>
                        <li className="lin"><a href="">Features</a></li>
                        <li className="lin"><a href="">Pricing</a></li>
                        <li className="">
                            <button className="login-btn">Login</button>
                        </li>
                    </ul>

                </header>

                <section className="flex w-full mt-32 mb-36">
                    <div className="flex flex-col pl-36 w-full">
                        <div className="flex space-x-4 mb-7">
                        <h6 className="text-neutral-lgrayishblue bg-neutral-vdarkblue rounded-full text-center py-0 px-2 text-base font-medium">New</h6>
                        <p className="text-neutral-grayishblue text-base uppercase tracking-widest font-light">Monographic Dashboard</p>
                        </div>

                        <div >
                            <h3 className="text-neutral-vdarkblue text-3xl font-bold uppercase mb-5">Powerful Insights into your team</h3>
                            <p className="text-neutral-dgrayishblue text-lg font-light">Project planning and time tracking for aglie teams.</p>                            
                        </div>

                        <div className="flex space-x-4 mt-10">
                        <button className="text-neutral-lgrayishblue text-base font-bold bg-primary-red py-2 px-4 uppercase rounded-md">Schedule A demo</button>
                        <button className="bg-transparent rounded-none text-neutral-grayishblue text-base font-light tracking-widest uppercase">To see a preview</button>
                        </div>

                    </div>

                    <div><img src={illustrate} alt="" /></div>

                </section>
            </div>
        </div>
    )
}