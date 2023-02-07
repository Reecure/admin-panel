import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { selectTheme } from "./redux/ToggleThemeSlice/ToggleThemeSlice";
import BarChartCopmp from "./scenes/barChart";
import Calendar from "./scenes/calendar";
import ContactsInformation from "./scenes/contactsInformation";
import Dashboard from "./scenes/dashboard";
import Faq from "./scenes/faq";
import GeographyChart from "./scenes/geographyChart";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import InvoiceBalances from "./scenes/invoiceBalances";
import LineChartComp from "./scenes/lineChart";
import ManageTeam from "./scenes/manageTeam";
import PieChartComp from "./scenes/pieChart";
import ProfileForm from "./scenes/profileForm";

function App() {
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  }, [theme]);

  return (
    <Container>
      <Sidebar />
      <main className="ml-72 px-6">
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/manageTeam" element={<ManageTeam />}></Route>
          <Route
            path="/contactsInformation"
            element={<ContactsInformation />}
          ></Route>
          <Route path="/invoicesBalances" element={<InvoiceBalances />}></Route>

          <Route path="/profileForm" element={<ProfileForm />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/faq" element={<Faq />}></Route>

          <Route path="/barChart" element={<BarChartCopmp />}></Route>
          <Route path="/pieChart" element={<PieChartComp />}></Route>
          <Route path="/lineChart" element={<LineChartComp />}></Route>
          <Route path="/geographyChart" element={<GeographyChart />}></Route>
        </Routes>
      </main>
    </Container>
  );
}

export default App;
