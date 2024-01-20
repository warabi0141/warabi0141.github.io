import { ToggleButton } from "./ToggleButton";
import type { Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof ToggleButton> = {
    component: ToggleButton,
    title: 'ToggleButton'
}

export default meta;

type Story = StoryObj<typeof ToggleButton>
export const Default: Story = {
    args: {
        isOpen: false,
    }
}

export const Opened: Story = {
    args: {
        isOpen: true,
    }
}