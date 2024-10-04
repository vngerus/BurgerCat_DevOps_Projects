import React from 'react';

const Card: React.FC = () => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg">
            <a href="#">
                <img
                    className="rounded-t-lg w-full object-cover h-48"
                    src="https://www.clarionledger.com/gcdn/presto/2019/02/01/PJAM/50282c97-c50b-4a9f-a562-1c4ee80a5af3-Challenge_8.jpg?width=700&height=438&fit=crop&format=pjpg&auto=webp"
                    alt="Hamburguesa"
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        Anvorguesa de testeo
                    </h5>
                </a>
                <p className="mb-4 font-normal text-gray-700">
                    asereje ja aqui va la futura descripcion ehehee
                </p>

                <div className='flex justify-center'>
                    <div className="relative flex items-center max-w-[8rem]">
                        <button type="button" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:outline-none">
                            <svg className="w-4 h-4 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                            </svg>
                        </button>
                        <input
                            type="text"
                            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm w-14"
                            placeholder="1"
                            required
                        />
                        <button type="button" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:outline-none">
                            <svg className="w-4 h-4 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
