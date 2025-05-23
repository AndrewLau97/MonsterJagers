import supabase from "../config/supabaseClient";

const getUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

const getData = async (setSaveFile) => {
  const user = await getUser();
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  const { data } = await supabase
    .from("users")
    .select("saveData")
    .eq("id", user.id);
  setSaveFile(data[0].saveData);
};

const updateData = async (saveFile) => {
  const user = await getUser();
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  const { data } = await supabase
    .from("users")
    .update({ saveData: saveFile })
    .eq("id", user.id);
};

export { getData, updateData};
