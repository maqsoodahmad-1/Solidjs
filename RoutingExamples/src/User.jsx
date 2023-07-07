import { useParams } from "@solidjs/router"
import styles from "./User.module.css";

const User = () => {
    const params = useParams();
    return(

        <div class={styles.User}>
        <header class={styles.header}>
          <p>
            Edit <code>src/User.tsx</code> and save to reload.
          </p>
          <A class={styles.link} href="/">
            Home
          </A>
          <A class={styles.link} href="/about">
            About
          </A>
          <A class={styles.link} href="/contact">
            Contact
          </A>
          <p>
            This is the user with the id of <code>{params.id}</code> {/* 👈 Access the dynamic route parameter */}
          </p>
        </header>
      </div>
    );
  };
  export default User;