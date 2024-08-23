import style from "../styles/common.module.scss";

export function Logo() {
  return (
    <div className={style.logoDiv}>
      <p className="font-black text-3xl text-primary">BONSE</p>
      <p className={style.subText}>
        By<b> Cresteem</b>
      </p>
    </div>
  );
}
