import supabase from "../config/supabaseClient";

const getData = async (setSaveFile) => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const { data } = await supabase
      .from("users")
      .select("saveData")
      .eq("id", user.id);
      setSaveFile(data[0].saveData);
    };

export {getData}