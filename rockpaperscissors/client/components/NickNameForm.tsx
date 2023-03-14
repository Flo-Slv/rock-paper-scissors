import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import validator from "validator";

import TextField from "@mui/material/TextField";
import { inputLabelClasses } from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

import useStore from "../utils/zustand/store";

const schema = object({
  nickName: string()
    .required("Please enter a nickname.")
    .min(2, "Nickname should be between 2 to 22 characters.")
    .max(22, "Nickname should be between 2 to 22 characters."),
}).required();

const NickNameForm = () => {
  const setNickName = useStore((state) => state.setNickName);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const { nickName } = data;

    // Use validator to avoid xss attacks.
    // usefull if we send data to backend (not the case here) !
    setNickName(validator.escape(nickName));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-7"
    >
      <Controller
        name="nickName"
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <TextField
            {...field}
            id="nickName"
            type="text"
            variant="outlined"
            className="ml-5 mr-5 w-60"
            InputLabelProps={{
              sx: {
                [`&.${inputLabelClasses.shrink}`]: {
                  color: "black",
                },
              },
            }}
            label="Nickname *"
            placeholder="Enter a nickname to play."
            autoComplete="off"
            helperText={
              errors?.nickName ? errors?.nickName?.message?.toString() : ""
            }
            error={errors?.nickName ? Boolean(true) : Boolean(false)}
          />
        )}
      />

      <Button type="submit" variant="contained" size="small">
        Validate
      </Button>
    </form>
  );
};

export default NickNameForm;
