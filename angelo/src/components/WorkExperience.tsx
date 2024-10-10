import Image from 'next/image';

const WorkExperience = () => (
    <section className="bg-custom-dark my-12 text-center">
        <h1 className="text-white text-2xl font-bold mb-6">My Work Experience</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="bg-custom-dark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center">
            <Image 
                src="/icones/outlierlogo.svg" 
                alt="Outlier Logo"
                width={50} 
                height={50} 
                className="mr-4" 
            />
            <div>
                <h2 className="text-white text-xl font-semibold">Outlier</h2>
                <p className="text-gray-400">2024-Now</p>
            </div>
            </div>

            <div className="bg-custom-dark p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center">
            <Image 
                src="/icones/upworklogo.svg" 
                alt="Outlier Logo"
                width={50} 
                height={50} 
                className="mr-4" 
            />
            <div>
                <h2 className="text-white text-xl font-semibold">UpWork</h2>
                <p className="text-gray-400">2024-Now</p>
            </div>
            </div>
        
            
        </div>
    </section>
);

export default WorkExperience;
