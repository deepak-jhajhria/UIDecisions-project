import Heading from "./common/Heading"
import Description from "./common/Description"
import { makingDesignList } from "./common/Helper"

const MakingDesign = () => {
    return (
        <div className="p-6 sm:p-8 lg:p-10">
            <div className="container max-w-[1130px] sm:border rounded-[36px] lg:rounded-[48px] border-primary-dark sm:p-8 lg:px-10 xl:px-[60px] lg:py-9">
                <Heading className="pt-1" title="Making Design Decisions" />
                <Description className="pt-[11px] text-secondary-light" description="How to design effective user interfaces at warp-speed." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-[34px]">
                    {makingDesignList.map((item, index) => (
                        <div key={index} className="flex flex-col justify-between bg-primary-lighter hover:bg-tertiary rounded-[20px] py-3 px-[10px] group duration-300">
                            <div className={`mx-5 sm:mx-8 xl:mx-11 ${index === 0 && "max-w-[258px]"}`}>
                                <Description className="pt-7" description={item.description} />
                            </div>
                            <div className={`bg-transparent duration-300 group-hover:bg-black rounded-[13px] pt-[33px] border border-transparent pb-10 mt-[14px] px-5 sm:px-8 xl:px-11 ${index === 3 && "!pr-5"}`}>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white lg:!leading-[28.64px]">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <Description className="mt-[30px] text-center" description="Notion workspace designed to help you explore and apply these concepts."/>
            </div>
        </div>
    )
}

export default MakingDesign
