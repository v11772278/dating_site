import css from "./blinkingQuestion.module.css";

export const BlinkingQuestion = () => {
  return (
    <div role="alert" className={css.blinkingAlert}>
      ⚠️ IMPORTANT! <br></br>Would you pay 20 bucks to have sex with a horny
      woman from our website?
    </div>
  );
};
