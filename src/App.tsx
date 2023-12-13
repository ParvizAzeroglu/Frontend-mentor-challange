import React, { ReactNode, useEffect, useState } from "react";

import styles from "./App.module.scss";

const App: React.FC = () => {
  const [isTooltipVisible, setTooltipVisible] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Card>
        <Image />
        <Content>
          <TextArea />
          <Share
            isTooltipVisible={isTooltipVisible}
            setTooltipVisible={setTooltipVisible}
          />
        </Content>
      </Card>
    </div>
  );
};

interface ToolTipProps {
  isTooltipVisible: boolean;
  setTooltipVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Share: React.FC<ToolTipProps> = ({
  isTooltipVisible,
  setTooltipVisible,
}) => {
  function handleClick(): void {
    setTooltipVisible((prev) => !prev);
  }

  return (
    <div className={styles.shareContainer}>
      <div>
        <img
          src="./images/avatar-michelle.jpg"
          alt="Avatar images"
          width="25px"
          height="25px"
        />
        <div style={{ margin: "auto", marginLeft: "10px" }}>
          <h3 style={{ fontSize: "14px" }}>Michelle Appleton</h3>
          <p style={{ textAlign: "left", fontSize: "12px" }}>28 Jun 2020</p>
        </div>
      </div>

      <button className={styles.button} onClick={handleClick}>
        <img src="./images/icon-share.svg" alt="" />
      </button>
      {isTooltipVisible && <ToolTip />}
    </div>
  );
};

const TextArea: React.FC = () => {
  return (
    <div className={styles.textArea}>
      <h3>
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h3>
      <p style={{ marginTop: "10px", fontSize: "14px" }}>
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
    </div>
  );
};

const ToolTip: React.FC = () => {
  return (
    <div className={styles.tooltipContainer}>
      <p className={styles.tooltipText}>Share</p>
      <img
        src="./images/icon-facebook.svg"
        alt="facebook images"
        width="25px"
        height="25px"
        className={styles.tooltipImage}
      />
      <img
        src="./images/icon-pinterest.svg"
        alt="pinterest images"
        width="25px"
        height="25px"
        className={styles.tooltipImage}
      />
      <img
        src="./images/icon-twitter.svg"
        alt="twitter images"
        width="25px"
        height="25px"
        className={styles.tooltipImage}
      />
      <div className={styles.arrowDown}></div>
    </div>
  );
};

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className={styles.contentContainer}>{children}</div>;
};

interface ContentProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={styles.cardContainer}>{children}</div>;
};

interface CardProps {
  children: ReactNode;
}

const Image: React.FC = () => {
  return (
    <div className={styles.imageContainer}>
      <img src="./images/drawers.jpg" alt="drawer image" />
    </div>
  );
};

export default App;
