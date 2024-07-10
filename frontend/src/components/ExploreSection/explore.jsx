const ExploreSection = ({ data }) => {
    return (
        <div className="flex gap-px self-stretch md:flex-col">
            {data.map((d, index) => (
                <div
                    key={"listexplore" + index}
                    className="flex h-[399px] w-full items-center bg-[url(/public/images/img_explore_nature.png)] bg-cover bg-no-repeat md:h-auto md:p-5"
                >
                    <div className="flex h-[399px] w-full items-end justify-center bg-[url(/public/images/img_group_8.png)] bg-cover bg-no-repeat px-14 py-[103px] md:h-auto md:p-5">
                        <div className="mt-5 flex w-[48%] flex-col items-start gap-[18px] md:w-full">
                            <div className="relative h-[96px] self-stretch">
                                <img
                                    src={d.explorenature}
                                    alt="explore_nature"
                                    className="absolute bottom-[-0.85px] right-[0.00px] m-auto h-[19px] w-[46%]"
                                />
                                <div className="absolute left-[0.00px] top-[0.00px] m-auto flex flex-col items-center">
                                    <h2 className="relative z-[1] uppercase tracking-[1.80px]">Promotion</h2>
                                    <h3 className="text-4xl font-volkhov">{d.explorenature1}</h3>
                                </div>
                            </div>
                            <button
                                className="ml-[91px] min-w-[193px] rounded-[10px] font-semibold md:ml-0 sm:pr-5 bg-blue-300 text-white py-2 px-4"
                            >
                                View Packages
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExploreSection;
