import { PEOPLE_URL } from "@/constants";
import Image from "next/image";


type CampProps  = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  
}

const CampSite = ({backgroundImage, title, subtitle }: CampProps) =>{
  return(
    <div className={`h-full w-full min-w-[250px] sm:min-w-[800px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
      
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
{/* 
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) =>(
            <Image 
            className="inline-block h-10 w-10 rounded-full"
            src={url}
            key={url}
            alt="person"
            width={52}
            height={52}
            />
          ))}

          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div> */}
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className=" 2xl:max-container
    relative flex flex-col py-4 lg:mb-4 lg:py-10 xl:mb-10">
 <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
 <CampSite 
 backgroundImage="bg-bg-img-1"
 title="Specializing in Math"
 subtitle="Tutoring K-10"
 
 />
  <CampSite 
 backgroundImage="bg-bg-img-2"
 title="Tutoring K-10"
 subtitle="Mr's Lovett"
 
 />
   <CampSite 
 backgroundImage="bg-bg-img-3"
 title="Tutoring K-10"
 subtitle="Mr's Lovett"
 
 />
   <CampSite 
 backgroundImage="bg-bg-img-4"
 title="Tutoring K-10"
 subtitle="Mr's Lovett"
 
 />
 </div>

 <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
  <div className="bg-[#44b39d] p-8 lg:max-w-[500px] xl:max-w-[734] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
    <h2 className="regular-24 md:regular-32 3xl:regular-64 capitalize text-white"><strong>Feeling Lost And Not Knowing The Way?</strong></h2>
    <p className="regular-14 xl:regular-16 mt-5 text-white">Starting from the anxiety of teh climbers when visting a new clibming location, the possiblitity 
     getting lost is very large. That's why we are here fro those of you who want to start an adventure</p>
     <Image
     src="/quote.svg"
     alt="camp-2"
     width={186}
     height={219}
     className="camp-quote"
     />
  </div>
 </div>

    </section>
  )
}

export default Camp