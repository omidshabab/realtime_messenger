"use client"

import useOtherUser from "@/app/hooks/useOtherUser"
import { Conversation, User } from "@prisma/client"
import React from "react"

interface ProfileDrawerProps {
    isOpen: boolean
    onClose: () => void
    data: Conversation & {
        users: User[]
    }
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
    isOpen,
    onClose,
    data,
}) => {
    const otherUser = useOtherUser(data)

    return ( 
        <div className="">
            Profile Drawer
        </div>
     );
}
 
export default ProfileDrawer;