import css from "./blinkingQuestion.module.css";

export const BlinkingQuestion = () => {
  return (
    <div role="alert" className={css.blinkingAlert}>
      ⚠️ IMPORTANT! <br></br>If you want spicier content, be ready to throw in a
      few bucks.
    </div>
  );
};
