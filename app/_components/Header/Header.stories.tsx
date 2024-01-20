import { Header } from "./Header";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
    component: Header,
    title: 'Header'
}

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    render: ()=> <Header />
}