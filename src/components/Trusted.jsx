import TrusedCardLayout from "./TrusedCardLayout"
import Heading from "./common/Heading"
import { trustedSecList } from "./common/Helper"

const Trusted = () => {
    return (
        <div className="relative py-10 md:pt-16 lg:pt-[105px]">
            <div className=" container max-w-[1130px]">
                <Heading className="max-w-[742px] mx-auto text-center" title="Trusted by Over 2,000 Designers, Developers, and Founders" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-cols-min auto-rows-auto gap-8 mt-9 sm:mt-14 lg:mt-[71px] max-h-[700px] overflow-scroll scroll-bar-hidden">
                    {trustedSecList.map((item, index) => (
                        <div key={index} className="flex flex-col gap-8">
                            {item.col.map((item, index) => (
                                <TrusedCardLayout key={index} profilePhoto={item.profilePhoto} role={item.role} name={item.name} date={item.date} description={item.description} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <span className="flex pointer-events-none w-full h-[244px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)] absolute bottom-9 left-0"></span>
        </div>
    )
}

export default Trusted
