import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import {useParams, useLoaderData, useNavigate} from "react-router-dom";
import {useState} from "react";
import {toast} from "react-toastify";

// const carBrand = await CarBrands.show();


const EditCarBrands = () => {
    const job = useLoaderData();
    const [nameEn, setNameEn] = useState(brand.nameEn);
    const [nameAr, setNameAr] = useState(brand.nameAr);
    const [image, setImage] = useState('');

    const navigate = useNavigate();
    const {id} = useParams();


    const submitForm = (e) => {
        e.preventDefault();

        const updatedJob = {
            id,
            name_en: nameEn,
            name_ar: nameAr,
            image: image
        }

        // updateJobSubmit(updatedJob) // TODO Update Car Brand
        toast.success('Brand Updated Successfully');

        return navigate(`/car-brands/`)
    };

    return (
        <>
            <Breadcrumb pageName="Form Elements"/>

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    {/* <!-- Input Fields --> */}
                    <div
                        className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Car Brands
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Name En
                                </label>
                                <input
                                    type="text"
                                    placeholder="Default Input"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Name Ar
                                </label>
                                <input
                                    type="text"
                                    placeholder="Active Input"
                                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Image
                                </label>
                                <input
                                    type="file"
                                    className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                                />
                            </div>
                        </div>
                    </div>

                    {/* <!-- File upload --> */}
                    <div
                        className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                File upload
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Attach file
                                </label>
                                <input
                                    type="file"
                                    className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default EditCarBrands;