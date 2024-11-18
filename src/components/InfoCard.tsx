const InfoCard = ({ title, description }: { title: string, description: string | number }) => {
    return <>
        <div className="w-full lg:w-6/12 xl:w-6/12 px-2">
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6  shadow">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">{title}</h5>
                            <span className="font-semibold text-blueGray-700">{description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default InfoCard