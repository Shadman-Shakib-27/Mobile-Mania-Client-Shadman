const CopyRight = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-200 text-base-content">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All Right Reserved By
          <span className="text-[#22A1F0] font-semibold"> Shadman Shakib</span>
        </p>
      </aside>
    </footer>
  );
};

export default CopyRight;
