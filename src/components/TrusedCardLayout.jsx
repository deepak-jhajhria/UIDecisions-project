import { Rating } from './common/Icons'
import Description from './common/Description'

const TrusedCardLayout = ({ profilePhoto, name, role, description, date }) => {
    return (
        <div className="w-full lg:max-w-[384px] h-min flex flex-col gap-[14px] bg-primary-lighter p-[30px] rounded-[20px]">
            <div className="flex items-center gap-[14px]">
                <img className="rounded-full pointer-events-none" src={profilePhoto} alt={name} width={50} height={50} />
                <div className="flex flex-col gap-[2px]">
                    <p className="text-sm font-medium text-white sm:text-base">{name}</p>
                    <p className="text-xs font-light text-white sm:text-sm">{role}</p>
                </div>
            </div>
            <span><Rating /></span>
            <Description description={description} />
            <Description className="!text-primary-light" description={date} />
        </div>
    )
}
export default TrusedCardLayout
