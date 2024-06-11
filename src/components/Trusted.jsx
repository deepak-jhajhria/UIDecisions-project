import Description from "./common/Description"
import Heading from "./common/Heading"
import { trustedSecList } from "./common/Helper"
import { Rating } from "./common/Icons"

const Trusted = () => {
    return (
        <div className="relative py-10">
            <div className=" container max-w-[1130px]">
                <Heading className="max-w-[742px] mx-auto text-center" title="Trusted by Over 2,000 Designers, Developers, and Founders" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[71px] max-h-[700px] overflow-scroll scroll-bar-hidden">
                    {trustedSecList.map((item, index) => (
                        <div key={index} className="w-full lg:max-w-[384px] h-min flex flex-col gap-[14px] bg-primary-lighter p-[30px] rounded-[20px]">
                            <div className="flex items-center gap-[14px]">
                                <img className="rounded-full" src={item.profilePhoto} alt={item.name} width={50} height={50} />
                                <div className="flex flex-col gap-[2px]">
                                    <p className="text-sm font-medium text-white sm:text-base">{item.name}</p>
                                    <p className="text-xs font-light text-white sm:text-sm">{item.role}</p>
                                </div>
                            </div>
                            <span><Rating /></span>
                            <Description description={item.description} />
                            <Description className="text-primary-light" description={item.date} />
                        </div>
                    ))}
                </div>
            </div>
            <span className="flex w-full h-[244px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000000_100%)] absolute bottom-0 left-0"></span>
        </div>
    )
}

export default Trusted
