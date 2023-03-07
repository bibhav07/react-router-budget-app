import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem } from "../helpers";

export async function logoutAction() {

    //helper
    deleteItem({
        key : "userName"
    });
    deleteItem({
        key : "budgets"
    });
    deleteItem({
        key : "expenses"
    });

    toast.success("Account deleted!")


    return redirect("/");
    
}