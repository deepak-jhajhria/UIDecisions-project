import Description from "./common/Description"
import Heading from "./common/Heading"
import { madeForSecList } from "./common/Helper"

const MadeFor = () => {
    return (
        <div className="py-10">
            <div className="container max-w-[1130px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-[29px]">
                    <div className="border border-primary-dark rounded-[30px] lg:col-span-5 py-[93px] px-[57px]">
                        <Heading className="max-w-[260px] lg:max-w-[358px]" title="Made for &nbsp; &nbsp; high-velocity product people" />
                    </div>
                    {madeForSecList.map((item, index) => (
                        <div key={index} className={`flex bg-primary-lighter rounded-[30px] lg:col-span-4 py-[87px] px-[39px] relative ${index === 1 && "lg:!col-span-5 px-[57px]"}`}>
                            <div className="relative z-10 flex flex-col">
                                <h4 className="text-2xl font-medium text-white lg:text-custom-3xl sm:text-3xl">{item.title}</h4>
                                <Description className="mt-[30px]" description={item.description} />
                            </div>
                            <img className={`absolute z-0 bottom-0 right-0 w-[30%] ${index === 0 && "top-0"}`} src={item.animateImage} alt="animateimage" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MadeFor
