using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HMS.DAL.Migrations
{
    public partial class medigetA : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Morgues",
                columns: new[] { "MorgueID", "Capacity", "IsolationCapability", "MorgueName" },
                values: new object[] { 1, 50, true, "Morgue-1" });

            migrationBuilder.InsertData(
                table: "Morgues",
                columns: new[] { "MorgueID", "Capacity", "IsolationCapability", "MorgueName" },
                values: new object[] { 2, 100, false, "Morgue-2" });

            migrationBuilder.InsertData(
                table: "Drawers",
                columns: new[] { "DrawerID", "DrawerCondition", "DrawerNo", "IsOccupied", "MorgueID" },
                values: new object[] { 1, 1, "Drawer-001", false, 1 });

            migrationBuilder.InsertData(
                table: "Drawers",
                columns: new[] { "DrawerID", "DrawerCondition", "DrawerNo", "IsOccupied", "MorgueID" },
                values: new object[] { 2, 2, "Drawer-002", true, 2 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Drawers",
                keyColumn: "DrawerID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Drawers",
                keyColumn: "DrawerID",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Morgues",
                keyColumn: "MorgueID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Morgues",
                keyColumn: "MorgueID",
                keyValue: 2);
        }
    }
}
