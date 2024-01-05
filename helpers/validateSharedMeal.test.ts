import { SharedMeal } from "@/types";
import { validateShareMeal } from "./validateShareMeal";
import { VALIDATION_ERRORS } from "./constants";

const LONG_TEXT =
  "This is a very long instruction that exceeds the maximum character limit";

describe("validateSharedMeal", () => {
  it("should return an object with values property when all fields are valid", () => {
    const formData = new FormData();
    formData.append("title", "Test Title");
    formData.append("summary", "Test Summary");
    formData.append("instructions", "Test Instructions");
    const imageFile = new File([""], "test.jpg", { type: "image/jpeg" });
    formData.append("image", imageFile);
    formData.append("name", "Test Creator");
    formData.append("email", "test@example.com");

    const result = validateShareMeal(formData);

    expect(result).toEqual({
      values: {
        title: "Test Title",
        summary: "Test Summary",
        instructions: "Test Instructions",
        image: imageFile,
        creator: "Test Creator",
        creator_email: "test@example.com",
      },
    });
  });

  it("should return an object with errors when there are empty and invalid fields", () => {
    const formData = new FormData();
    formData.append("title", "smth123");
    formData.append("summary", "as");
    formData.append("instructions", "");
    formData.append("image", new File([], "smth.jpg", { type: "image/jpg" }));
    formData.append("name", LONG_TEXT);
    formData.append("email", "smth-invalid_as_email");

    const result = validateShareMeal(formData);

    expect(result).toEqual({
      errors: [
        { field: "title", error: VALIDATION_ERRORS.INVALID_CHARS },
        { field: "summary", error: VALIDATION_ERRORS.MIN_CHARS },
        { field: "instructions", error: VALIDATION_ERRORS.REQUIRED },
        { field: "image", error: VALIDATION_ERRORS.INVALID_FORMAT },
        { field: "creator", error: VALIDATION_ERRORS.MAX_CHARS },
        { field: "creator_email", error: VALIDATION_ERRORS.INVALID_EMAIL },
      ],
    });
  });
});
