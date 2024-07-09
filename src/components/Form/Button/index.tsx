import {
  Button as ButtonMUI,
  CircularProgress,
  ButtonProps as MaterialButtonProps,
} from "@mui/material";
import clsx from "clsx";
import styles from "./styles.module.scss";

interface ButtonProps extends MaterialButtonProps {
  /**
   * Indica se o botão está em estado de carregamento.
   */
  loading?: boolean;
  /**
   * Define o tema do botão, podendo ser 'primary' ou 'secondary'.
   */
  theme?: "primary" | "secondary";
}

export function Button({
  theme = "primary",
  children,
  color = "primary",
  variant = "outlined",
  loading,
  disabled,
  ...rest
}: ButtonProps) {
  const outlinedButtonColor = clsx(
    color === "primary" && styles.buttonOutlined,
    color === "secondary" && styles.secondary
  );

  return (
    <ButtonMUI
      {...rest}
      className={`${styles.button} ${
        theme === "primary" ? styles.primary : styles.secondary
      }`}
      classes={{
        ...rest.classes,
        outlined: clsx(outlinedButtonColor, rest.classes?.outlined),
      }}
      color={color}
      sx={{ height: 45, whiteSpace: "nowrap", ...rest.sx }}
      variant={variant}
      disabled={disabled}
    >
      <div style={{ color: loading ? "transparent" : undefined }}>
        {children}
      </div>
      {loading ? (
        <CircularProgress
          className={styles.progressBar}
          size={20}
          color="inherit"
        />
      ) : null}
    </ButtonMUI>
  );
}
