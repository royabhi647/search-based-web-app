import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../ui/dialog";
import ProfileImage from "../../assets/profile.svg";

function UserDetailsDialog({ open, onOpenChange, close, user }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-[24px] font-semibold">Fetch Details</DialogTitle>
          <DialogDescription className="text-[14px] font-normal text-[#71717A]">
            Here are the details of the following employee.
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <p className="text-gray-700">
            <strong>Name:</strong> {user.first_name} {user.last_name}
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> {user.city}
          </p>
          <p className="text-gray-700">
            <strong>Contact Number:</strong> {user.contact_number}
          </p>
          <p className="text-gray-700">
            <strong>Profile Image:</strong>
          </p>
          <div className="flex justify-start mt-2">
            <img src={ProfileImage} alt="Profile" className="w-[207px] h-[207px] object-cover" />
          </div>
        </div>
        <DialogFooter>
          <button className="bg-gray-200 py-2 px-4 rounded hover:bg-gray-300 transition duration-200"
            onClick={close}
          >
            Close
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UserDetailsDialog;