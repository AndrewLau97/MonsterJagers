import supabase from "../config/supabaseClient";

const updateData = async (saveFile) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data } = await supabase
      .from("users")
      .update({ saveData: saveFile })
      .eq("id", user.id);
  };


export default updateData