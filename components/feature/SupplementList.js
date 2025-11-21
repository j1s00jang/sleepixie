import { useState, useEffect } from "react";
import SupplementCard from "./SupplementCard";
import SupplementModal from "./SupplementModal";
import styles from "./SupplementList.module.css";

// SupplementList handles loading, searching, and displaying supplement cards
const SupplementList = ({ searchQuery }) => {
  // Supplement data and loading/error state
  const [supplements, setSupplements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modal state: selectedSupplement is null if modal is closed
  const [selectedSupplement, setSelectedSupplement] = useState(null);
  // Track user-selected supplements
  const [selectedSupplements, setSelectedSupplements] = useState({});

  // Load supplements from JSON on mount
  useEffect(() => {
    async function fetchSupplements() {
      setLoading(true);
      try {
        const res = await fetch("/data/supplements.json");
        if (!res.ok) throw new Error("Failed to load supplements");
        const data = await res.json();
        setSupplements(data.supplements);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchSupplements();
  }, []);

  // Open modal for a supplement
  const openModal = (supplement) => setSelectedSupplement(supplement);
  // Close modal
  const handleModalClose = () => setSelectedSupplement(null);

  // Save selected supplement data from modal
  const handleModalSave = (modalData) => {
    setSelectedSupplements((prev) => ({
      ...prev,
      [selectedSupplement.id]: { ...selectedSupplement, ...modalData },
    }));
    setSelectedSupplement(null);
  };

  // Remove a selected supplement
  const handleRemove = (id) => {
    setSelectedSupplements((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  // Filter supplements by search query
  const filtered = supplements.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Loading state
  if (loading) {
    return <div className={styles.loading}>Loading supplements...</div>;
  }
  // Error state
  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }
  // No results state
  if (searchQuery && filtered.length === 0) {
    return (
      <div className={styles.noResults}>
        <p>No supplements found matching "{searchQuery}"</p>
        <p className={styles.noResultsSubtext}>
          Try searching for a different supplement.
        </p>
      </div>
    );
  }

  // Main supplement list rendering
  return (
    <>
      <div className={styles.supplementList}>
        {filtered.map((supplement) => {
          const selected = selectedSupplements[supplement.id];
          return (
            <SupplementCard
              key={supplement.id}
              name={supplement.name}
              image={supplement.image}
              frequency={supplement.frequency}
              selected={selected}
              onAdd={() => openModal(supplement)}
              onRemove={
                selected ? () => handleRemove(supplement.id) : undefined
              }
            />
          );
        })}
      </div>
      {/* Modal for supplement details, shown if a supplement is selected */}
      {selectedSupplement && (
        <SupplementModal
          open={!!selectedSupplement}
          onClose={handleModalClose}
          onSave={handleModalSave}
          title={selectedSupplement.name}
        />
      )}
    </>
  );
};

export default SupplementList;
