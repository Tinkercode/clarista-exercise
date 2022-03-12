import { useMemo } from "react";

interface UserTableProps {
  isMaleChecked?: boolean;
  isFemaleChecked?: boolean;
  searchTerm?: string;
  userData?: any;
}

const UserTable: React.FC<UserTableProps> = ({
  isMaleChecked,
  isFemaleChecked,
  searchTerm,
  userData,
}) => {
  const tableData = useMemo(() => {
    if (isMaleChecked && !isFemaleChecked) {
      return userData
        .filter((userVal: any) =>
          searchTerm && searchTerm.length > 0
            ? userVal.gender === "Male" &&
              (userVal.first_name.toLowerCase().startsWith(searchTerm) ||
                userVal.last_name.toLowerCase().startsWith(searchTerm) ||
                userVal.email.toLowerCase().startsWith(searchTerm))
            : userVal.gender === "Male"
        )
        .map((userVal: any) => {
          return (
            <tr key={userVal.id + userVal.first_name} className="text-center">
              <td>{userVal.id}</td>
              <td>{userVal.first_name}</td>
              <td>{userVal.last_name}</td>
              <td>{userVal.email}</td>
              <td>{userVal.gender}</td>
            </tr>
          );
        });
    } else if (isFemaleChecked && !isMaleChecked) {
      return userData
        .filter((userVal: any) =>
          searchTerm && searchTerm.length > 0
            ? userVal.gender === "Female" &&
              (userVal.first_name.toLowerCase().startsWith(searchTerm) ||
                userVal.last_name.toLowerCase().startsWith(searchTerm) ||
                userVal.email.toLowerCase().startsWith(searchTerm))
            : userVal.gender === "Female"
        )
        .map((userVal: any) => {
          return (
            <tr key={userVal.id + userVal.first_name} className="text-center">
              <td>{userVal.id}</td>
              <td>{userVal.first_name}</td>
              <td>{userVal.last_name}</td>
              <td>{userVal.email}</td>
              <td>{userVal.gender}</td>
            </tr>
          );
        });
    } else {
      return userData
        .filter((userVal: any) =>
          searchTerm && searchTerm.length > 0
            ? userVal.first_name.toLowerCase().startsWith(searchTerm) ||
              userVal.last_name.toLowerCase().startsWith(searchTerm) ||
              userVal.email.toLowerCase().startsWith(searchTerm)
            : true
        )
        .map((userVal: any) => {
          return (
            <tr key={userVal.id + userVal.first_name} className="text-center">
              <td>{userVal.id}</td>
              <td>{userVal.first_name}</td>
              <td>{userVal.last_name}</td>
              <td>{userVal.email}</td>
              <td>{userVal.gender}</td>
            </tr>
          );
        });
    }
  }, [isFemaleChecked, isMaleChecked, searchTerm, userData]);
  return (
    <>
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </>
  );
};

export default UserTable;
