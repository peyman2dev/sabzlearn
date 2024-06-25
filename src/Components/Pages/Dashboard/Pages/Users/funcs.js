import api from "../../../../../Utils/Api/api"
import toast from "../../../../Reusable/Toast/Toast"

export const userBanFn = (user) => {
    api.put(`users/ban/${user?._id}`)
        .then(r => r.data)
        .then(d => {
            console.log(d)
            toast.success("کاربر با موفقیت بن شد", () => { }, 500)
            return d
        }).catch(err => {
            toast.error("عملیات نا موفق بود !")
            throw new Error(err)
        })
}

export const premHandler = user => {
    let data = {
        id: user?._id,
        role: user?.role == "ADMIN" ? "USER" : "ADMIN"
    }
    api.put('users/role', data)
        .then(r => r.data)
        .then(d => {
            console.log(d)
            toast.success("عملیات با موفقیت انجام گردید", () => { }, 500)
            return d
        }).catch(err => {
            toast.error("عملیات نا موفق بود !")
            throw new Error(err)
        })
}