export function SiteFooter() {
  return (
    <footer className="mt-14 border-t-2 border-slate-400 py-6 dark:border-slate-500 sm:mt-16">
      <p className="text-center text-sm text-slate-500 dark:text-slate-500">
        © {new Date().getFullYear()} Ye Marn Aung
      </p>
    </footer>
  );
}
