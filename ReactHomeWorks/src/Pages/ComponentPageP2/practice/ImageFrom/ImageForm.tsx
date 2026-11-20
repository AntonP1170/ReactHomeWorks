import style from "@/Pages/ComponentPageP2/ComponentPageP2.module.css";
import {useState} from "react";
import {useForm} from "react-hook-form";

interface FormState {
    width: string;
    height: string;
}

const ImageForm = () => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm<FormState>()
    const [size, setSize] = useState({width: 0, height: 0})
    const [selected, setSelected] = useState<boolean>(false)

    const handleForm = (data: FormState) => {
        reset()
        setSelected(true)
        setSize({width: Number(data.width), height: Number(data.height)})

    }
    return (
        <>
            {selected ? (<img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvniH2gp2Ny0RBJ-NuxGw_PYyUagOZLch6CUPpjTC4lA&s=10"
                alt="multiplicationTable" style={{width: size.width, height: size.height}}/>) : (

                <form onSubmit={handleSubmit(handleForm)}>
                    <h2>Enter img size</h2>
                    <input {...register("width", {minLength: {value: 3, message: "width is too small"}})}
                           type="text" id="img-width"
                           placeholder={"width"}/>
                    {errors.width && <p className={style.error}>{errors.width.message}</p>}
                    <br/>
                    <input {...register("height", {minLength: {value: 3, message: "height is too small"}})}
                           type="text" id="img-height"
                           placeholder={"height"}/>
                    {errors.height && <p className={style.error}>{errors.height.message}</p>}
                    <br/>
                    <button>Send</button>
                </form>
            )}
        </>
    )
}
export default ImageForm