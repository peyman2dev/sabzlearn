import * as y from 'yup'

const loginSchema = y.object().shape({
    identifier: y.string().min(3, "حداقل حروف برای نام کاربری 3 کلمه است"),
    password: y.string().min(8, "حداقل حروف برای گذرواژه 8 کلمه است")
})

const registerSchema = y.object().shape({
    name: y.string().matches(/^[ا-ی]{3,}\s[ا-ی]{3,}$/g, "نام و نام خانوادگی خود را درست وارد کنید ..").required("نام و نام خانوادگی اجباری می باشد"),
    username: y.string().matches(/^[\w]\S{3,14}$/g, "حداقل 3 و حداکثر 14 کلمه را برای نام کاربری وارد نمائید ..").required("نام کاربری اجباری می باشد"),
    email: y.string().matches(/^[\w]+\@[\w]{3,5}\.[\w]{2,3}$/g, "لطفا ایمیل خود را به درستی وارد نمائید...").required("ایمیل اجباری می باشد"),
    phone: y.string().matches(/^09(1[\d]|2[0-2]|3[\d]|0[0-5])\w{7}$/g, "لطفا شماره تلفن خود را به درستی وارد نمائید ..").required("شماره تماس اجباری می باشد .."),
    password: y.string().matches(/^(\w\.?){8,42}$/g, "لطفا گذرواژه خود را به درستی وارد نمائید ..").required("گذرواژه اجباری می باشد..")

})


const courseUploadSchema = y.object().shape({
    name: y.string().min(3, "عنوان محصول حداقل باید شمامل 3 کلمه باشد ..").max(60).required("عنوان محصول اجباری ست !"),
    price: y.number("قیمت فقط میتواند حاصل ارقام باشد").required("لطفا قیمت محصول را وارد نمائید .."),
    status: y.string().required("این فیلد اجباری ست !"),
    shortName: y.string().min(3, "عنوان کوتاه محصول حداقل باید شمامل 3 کلمه باشد ..").required("عنوان کوتاه محصول را وارد نمائید ..."),
    categoryID: y.string().required("لطفا دسته بندی محصول را وارد نمائید .."),
})

export { loginSchema, registerSchema, courseUploadSchema }
