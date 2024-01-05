export type ErrorItem = {
  field: string;
  error: string;
};

export type ParsedFormData = {
  title: string;
  summary: string;
  instructions: string;
  image: File;
  creator: string;
  creator_email: string;
};

type Label = keyof ParsedFormData;

const myKey: Label = "title";

export type Entry = [Label, string | File];

const acceptedImageFormats = ["image/png", "image/jpeg"];

export function validateShareMeal(
  formData: FormData
):
  | { values: ParsedFormData; errors?: never }
  | { errors: ErrorItem[]; values?: never } {
  const values: ParsedFormData = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };

  const entries = Object.entries(values) as Entry[];

  const emptyFieldErrors = checkForEmptyFields(entries);
  if (emptyFieldErrors.length) return { errors: emptyFieldErrors };

  const validationErrors = checkForInvalidInputs(entries);
  if (validationErrors.length) return { errors: validationErrors };
  else return { values };
}

function checkForEmptyFields(entries: Entry[]): ErrorItem[] {
  const errors: ErrorItem[] = [];
  entries.forEach(([key, value]) => {
    if (!value) errors.push({ field: key, error: "This field is required" });
  });

  return errors;
}

function checkForInvalidInputs(entries: Entry[]): ErrorItem[] {
  const errors: ErrorItem[] = [];
  entries.forEach(([key, value]) => {
    if (typeof value === "string" && value.length < 3)
      errors.push({ field: key, error: "Must have minimum 3 characters" });
    if (
      typeof value === "string" &&
      value.length > 30 &&
      key === "instructions"
    )
      errors.push({ field: key, error: "Must have maximum 30 characters" });
    if (key === "creator_email" && !isValidEmail(value as string))
      errors.push({ field: key, error: "Invalid email" });

    if (
      typeof value === "string" &&
      key !== "creator_email" &&
      !isValidText(value)
    )
      errors.push({
        field: key,
        error: "Can only contain letters, spaces and '-'",
      });
    if (typeof value === "object" && value.size > 500000) {
      errors.push({ field: key, error: "Max image size is 500Kb" });
    }

    if (
      typeof value === "object" &&
      !acceptedImageFormats.includes(value.type)
    ) {
      errors.push({ field: key, error: "Only .PNG and .JPEG images allowed" });
    }
  });
  return errors;
}

function isValidEmail(email: string): boolean {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return emailPattern.test(email);
}

function isValidText(text: string): boolean {
  const pattern = /[^a-zA-Z\s-]/g;

  return !pattern.test(text);
}

export function cleanWeirdChars(inputString: string): string {
  return inputString.replace(/[^a-zA-Z\s-]/g, "");
}
