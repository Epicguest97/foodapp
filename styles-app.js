// Extracted styles for App.js
import { StyleSheet } from 'react-native';

const PRIMARY_COLOR = '#3b82f6';
const CARD_BG = '#fff';
const BG_COLOR = '#f3f4f6';

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  logoIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
  },
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: BG_COLOR,
    flexGrow: 1,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
    marginBottom: 10,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#222',
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  card: {
    backgroundColor: CARD_BG,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    width: '47%',
    marginBottom: 10,
  },
  menuImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
  menuName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#222',
  },
  menuDesc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    textAlign: 'center',
  },
  menuPrice: {
    fontSize: 16,
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 6,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cartPanel: {
    backgroundColor: CARD_BG,
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  cartItem: {
    marginBottom: 12,
  },
  cartName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cartControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  qtyButton: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginHorizontal: 4,
  },
  qtyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  qtyInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    width: 40,
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 2,
    paddingVertical: 2,
    backgroundColor: '#fafafa',
  },
  cartSubtotal: {
    marginLeft: 10,
    fontSize: 15,
    color: '#555',
    fontWeight: 'bold',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
    color: PRIMARY_COLOR,
    alignSelf: 'flex-end',
  },
  placeOrderButton: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  placeOrderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  disabledButton: {
    backgroundColor: '#b6cdfa',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BG_COLOR,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export { styles, PRIMARY_COLOR, CARD_BG, BG_COLOR };
