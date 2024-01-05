import { SharedMeal } from "@/types";
import {
  Entry,
  checkForEmptyFields,
  checkForInvalidInputs,
} from "./validateShareMeal";
import { VALIDATION_ERRORS } from "./constants";

const VALID_FORM: SharedMeal = {
  title: "Burger",
  summary: "Super burger",
  instructions: "Cook it",
  image: new File([], "valid.png", { type: "image/png" }),
  creator: "Svetlana",
  creator_email: "svetlana@mail.com",
};

const VALID_ENTRIES = Object.entries(VALID_FORM);

const LONG_TEXT =
  "This is a very long instruction that exceeds the maximum character limit";

describe("Validation functions", () => {
  describe("checkForEmptyFields", () => {
    it("should return an empty array when all fields have values", () => {
      const entries = VALID_ENTRIES;

      const result = checkForEmptyFields(entries as Entry[]);

      expect(result).toEqual([]);
    });

    it("should return an array of error objects for specific fields", () => {
      const entries = Object.entries({
        ...VALID_FORM,
        summary: "",
        creator: "",
      });

      const result = checkForEmptyFields(entries as Entry[]);

      expect(result).toEqual([
        { field: "summary", error: VALIDATION_ERRORS.REQUIRED },
        { field: "creator", error: VALIDATION_ERRORS.REQUIRED },
      ]);
    });
  });

  describe("checkForInvalidInputs", () => {
    it("should return an empty array when all inputs are valid", () => {
      const entries = VALID_ENTRIES;

      const result = checkForInvalidInputs(entries as Entry[]);

      expect(result).toEqual([]);
    });

    test("less than 3 characters", () => {
      const entries = Object.entries({
        ...VALID_FORM,
        title: "a",
      });

      const result = checkForInvalidInputs(entries as Entry[]);

      expect(result).toEqual([
        { field: "title", error: VALIDATION_ERRORS.MIN_CHARS },
      ]);
    });

    test("more than 30 characters except instructions field", () => {
      const entries = Object.entries({
        ...VALID_FORM,
        title: LONG_TEXT,
        instructions: LONG_TEXT,
      });

      const result = checkForInvalidInputs(entries as Entry[]);

      expect(result).toEqual([
        { field: "title", error: VALIDATION_ERRORS.MAX_CHARS },
      ]);
    });

    test("invalid characters except @ in email", () => {
      const entries = Object.entries({
        ...VALID_FORM,
        creator: "smth123",
        creator_email: "valid@mail.com",
      });

      const result = checkForInvalidInputs(entries as Entry[]);

      expect(result).toEqual([
        { field: "creator", error: VALIDATION_ERRORS.INVALID_CHARS },
      ]);
    });

    test("invalid image format", () => {
      const entries = Object.entries({
        ...VALID_FORM,
        image: new File([], "invalid.png", { type: "image/jpg" }),
      });

      const result = checkForInvalidInputs(entries as Entry[]);

      expect(result).toEqual([
        { field: "image", error: VALIDATION_ERRORS.INVALID_FORMAT },
      ]);
    });
  });
});
