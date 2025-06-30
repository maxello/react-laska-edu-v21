import { cn } from "../lib/utils";
import styles from "./Loader.module.css";

const Loader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div {...props} className={cn(styles.equalizer, className)}>
      {Array.from(Array(5), (_, i) => <div key={i}></div>)}
    </div>
  )
}

export default Loader