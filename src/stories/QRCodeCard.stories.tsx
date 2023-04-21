import type { Meta, StoryObj } from "@storybook/react";
import QRCodeCard from "../components/QRCodeCard";

import imageSrc from "../assets/challenges/qr-code-component/assets/image-qr-code.png";

const meta = {
  title: "Challenge/QRCodeCard",
  component: QRCodeCard,
  // tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: {
        desktop: {
          name: "Desktop",
          styles: {
            width: "1440px",
            height: "800px",
          },
        },
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px",
            height: "800px",
          },
        },
      },
    },
  },
} satisfies Meta<typeof QRCodeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc,
    title: "Improve your front-end skills by building projects",
    subtitle:
      "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
  },
};