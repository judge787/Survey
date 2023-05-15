import PyPDF2
import json
import pandas as pd
import glob
import os
import numpy as np
import matplotlib.pyplot as plt


#commented out the line below this because my folder structure is different
# os.chdir('Surveys')


files=[x for x in os.listdir() if x.endswith(".pdf")]
f = PyPDF2.PdfReader(files[0])
ff = f.get_fields()

Q11=ff["Q11"]["/V"]
Q21=ff["Q21"]["/V"]
Q22=ff["Q22"]["/V"]
Q31=ff["Q31"]["/V"]
Q41=ff["Q41"]["/V"]
Q42=ff["Q42"]["/V"]
Q51=ff["Q51"]["/V"]
Q52=ff["Q52"]["/V"]
Q61=ff["Q61"]["/V"]
Q62=ff["Q62"]["/V"]
Q71=ff["Q71"]["/V"]
Q72=ff["Q72"]["/V"]
Q81=ff["Q81"]["/V"]
Q82=ff["Q82"]["/V"]
Q91=ff["Q91"]["/V"]
Q92=ff["Q92"]["/V"]
Q101=ff["Q101"]["/V"]
Q102=ff["Q102"]["/V"]
Q103=ff["Q103"]["/V"]
Q104=ff["Q104"]["/V"]
Q105=ff["Q105"]["/V"]
Q111=ff["Q111"]["/V"]
Q121=ff["Q121"]["/V"]
Q131=ff["Q131"]["/V"]
Q132=ff["Q132"]["/V"]
Q133=ff["Q133"]["/V"]     
Q134=ff["Q134"]["/V"]
Q135=ff["Q135"]["/V"]  
Q136=ff["Q136"]["/V"]     
Q137=ff["Q137"]["/V"]     
Q138=ff["Q138"]["/V"]     
Q139=ff["Q139"]["/V"]     
Q1310=ff["Q1310"]["/V"]   
Q1311=ff["Q1311"]["/V"]   
Q1312=ff["Q1312"]["/V"]   
Q1313=ff["Q1313"]["/V"]   
Q1314=ff["Q1314"]["/V"]   
Q1315=ff["Q1315"]["/V"]   
Q1316=ff["Q1316"]["/V"]   
Q1317=ff["Q1317"]["/V"]   
Q1318=ff["Q1318"]["/V"]   
Q1319=ff["Q1319"]["/V"]   
Q1320=ff["Q1320"]["/V"] 
Q1511=int(ff["Q1511"]["/V"]   )
Q1512=int(ff["Q1512"]["/V"]   )
Q1513=int(ff["Q1513"]["/V"]   )
Q1514=int(ff["Q1514"]["/V"]   )
Q1515=int(ff["Q1515"]["/V"]   )
Q1516=int(ff["Q1516"]["/V"]   )
Q1517=int(ff["Q1517"]["/V"]   )
Q1521=int(ff["Q1521"]["/V"]   )
Q1522=int(ff["Q1522"]["/V"]   )
Q1523=int(ff["Q1523"]["/V"]   )
Q1524=int(ff["Q1524"]["/V"]   )
Q1525=int(ff["Q1525"]["/V"]   )
Q1526=int(ff["Q1526"]["/V"]   )
Q1527=int(ff["Q1527"]["/V"]   )
Q1531=int(ff["Q1531"]["/V"]   )
Q1532=int(ff["Q1532"]["/V"]   )
Q1533=int(ff["Q1533"]["/V"]   )
Q1534=int(ff["Q1534"]["/V"]   )
Q1535=int(ff["Q1535"]["/V"]   )
Q1536=int(ff["Q1536"]["/V"]   )
Q1537=int(ff["Q1537"]["/V"]   )
Q1541=int(ff["Q1541"]["/V"]   )
Q1542=int(ff["Q1542"]["/V"]   )
Q1543=int(ff["Q1543"]["/V"]   )
Q1544=int(ff["Q1544"]["/V"]   )
Q1545=int(ff["Q1545"]["/V"]   )
Q1546=int(ff["Q1546"]["/V"]   )
Q1547=int(ff["Q1547"]["/V"]   )
Q1551=int(ff["Q1551"]["/V"]   )
Q1552=int(ff["Q1552"]["/V"]   )
Q1553=int(ff["Q1553"]["/V"]   )
Q1554=int(ff["Q1554"]["/V"]   )
Q1555=int(ff["Q1555"]["/V"]   )
Q1556=int(ff["Q1556"]["/V"]   )
Q1557=int(ff["Q1557"]["/V"]   )
Q1561=int(ff["Q1561"]["/V"]   )
Q1562=int(ff["Q1562"]["/V"]   )
Q1563=int(ff["Q1563"]["/V"]   )
Q1564=int(ff["Q1564"]["/V"]   )
Q1565=int(ff["Q1565"]["/V"]   )
Q1566=int(ff["Q1566"]["/V"]   )
Q1567=int(ff["Q1567"]["/V"]   )
Q1571=int(ff["Q1571"]["/V"]   )
Q1572=int(ff["Q1572"]["/V"]   )
Q1573=int(ff["Q1573"]["/V"]   )
Q1574=int(ff["Q1574"]["/V"]   )
Q1575=int(ff["Q1575"]["/V"]   )
Q1576=int(ff["Q1576"]["/V"]   )
Q1577=int(ff["Q1577"]["/V"]   )
Q1581=int(ff["Q1581"]["/V"]   )
Q1582=int(ff["Q1582"]["/V"]   )
Q1583=int(ff["Q1583"]["/V"]   )
Q1584=int(ff["Q1584"]["/V"]   )
Q1585=int(ff["Q1585"]["/V"]   )
Q1586=int(ff["Q1586"]["/V"]   )
Q1587=int(ff["Q1587"]["/V"]   )
Q1591=int(ff["Q1591"]["/V"]   )
Q1592=int(ff["Q1592"]["/V"]   )
Q1593=int(ff["Q1593"]["/V"]   )
Q1594=int(ff["Q1594"]["/V"]   )
Q1595=int(ff["Q1595"]["/V"]   )
Q1596=int(ff["Q1596"]["/V"]   )
Q1597=int(ff["Q1597"]["/V"]   )
Q15101=int(ff["Q15101"]["/V"] )
Q15102=int(ff["Q15102"]["/V"] )
Q15103=int(ff["Q15103"]["/V"] )
Q15104=int(ff["Q15104"]["/V"] )
Q15105=int(ff["Q15105"]["/V"] )
Q15106=int(ff["Q15106"]["/V"] )
Q15107=int(ff["Q15107"]["/V"] )
Q15111=int(ff["Q15111"]["/V"] )
Q15112=int(ff["Q15112"]["/V"] )
Q15113=int(ff["Q15113"]["/V"] )
Q15114=int(ff["Q15114"]["/V"] )
Q15115=int(ff["Q15115"]["/V"] )
Q15116=int(ff["Q15116"]["/V"] )
Q15117=int(ff["Q15117"]["/V"] )
Q15121=int(ff["Q15121"]["/V"] )
Q15122=int(ff["Q15122"]["/V"] )
Q15123=int(ff["Q15123"]["/V"] )
Q15124=int(ff["Q15124"]["/V"] )
Q15125=int(ff["Q15125"]["/V"] )
Q15126=int(ff["Q15126"]["/V"] )
Q15127=int(ff["Q15127"]["/V"] )
Q1711 =int(ff["Q1711"]["/V"]  )
Q1712 =int(ff["Q1712"]["/V"]  )
Q1713 =int(ff["Q1713"]["/V"]  )
Q1714 =int(ff["Q1714"]["/V"]  )
Q1715 =int(ff["Q1715"]["/V"]  )
Q1716 =int(ff["Q1716"]["/V"]  )
Q1717 =int(ff["Q1717"]["/V"]  )
Q1721 =int(ff["Q1721"]["/V"]  )
Q1722 =int(ff["Q1722"]["/V"]  )
Q1723 =int(ff["Q1723"]["/V"]  )
Q1724 =int(ff["Q1724"]["/V"]  )
Q1725 =int(ff["Q1725"]["/V"]  )
Q1726 =int(ff["Q1726"]["/V"]  )
Q1727 =int(ff["Q1727"]["/V"]  )
Q1731 =int(ff["Q1731"]["/V"]  )
Q1732 =int(ff["Q1732"]["/V"]  )
Q1733 =int(ff["Q1733"]["/V"]  )
Q1734 =int(ff["Q1734"]["/V"]  )
Q1735 =int(ff["Q1735"]["/V"]  )
Q1736 =int(ff["Q1736"]["/V"]  )
Q1737 =int(ff["Q1737"]["/V"]  )
Q1741 =int(ff["Q1741"]["/V"]  )
Q1742 =int(ff["Q1742"]["/V"]  )
Q1743 =int(ff["Q1743"]["/V"]  )
Q1744 =int(ff["Q1744"]["/V"]  )
Q1745 =int(ff["Q1745"]["/V"]  )
Q1746 =int(ff["Q1746"]["/V"]  )
Q1747 =int(ff["Q1747"]["/V"]  )
Q1751 =int(ff["Q1751"]["/V"]  )
Q1752 =int(ff["Q1752"]["/V"]  )
Q1753 =int(ff["Q1753"]["/V"]  )
Q1754 =int(ff["Q1754"]["/V"]  )
Q1755 =int(ff["Q1755"]["/V"]  )
Q1756 =int(ff["Q1756"]["/V"]  )
Q1757 =int(ff["Q1757"]["/V"]  )
Q1761 =int(ff["Q1761"]["/V"]  )
Q1762 =int(ff["Q1762"]["/V"]  )
Q1763 =int(ff["Q1763"]["/V"]  )
Q1764 =int(ff["Q1764"]["/V"]  )
Q1765 =int(ff["Q1765"]["/V"]  )
Q1766 =int(ff["Q1766"]["/V"]  )
Q1767 =int(ff["Q1767"]["/V"]  )
Q1771 =int(ff["Q1771"]["/V"]  )
Q1772 =int(ff["Q1772"]["/V"]  )
Q1773 =int(ff["Q1773"]["/V"]  )
Q1774 =int(ff["Q1774"]["/V"]  )
Q1775 =int(ff["Q1775"]["/V"]  )
Q1776 =int(ff["Q1776"]["/V"]  )
Q1777 =int(ff["Q1777"]["/V"]  )
Q1781 =int(ff["Q1781"]["/V"]  )
Q1782 =int(ff["Q1782"]["/V"]  )
Q1783 =int(ff["Q1783"]["/V"]  )
Q1784 =int(ff["Q1784"]["/V"]  )
Q1785 =int(ff["Q1785"]["/V"]  )
Q1786 =int(ff["Q1786"]["/V"]  )
Q1787  =int(ff["Q1787"]["/V"] )
Q1791  =int(ff["Q1791"]["/V"] )
Q1792  =int(ff["Q1792"]["/V"] )
Q1793  =int(ff["Q1793"]["/V"] )
Q1794  =int(ff["Q1794"]["/V"] )
Q1795  =int(ff["Q1795"]["/V"] )
Q1796  =int(ff["Q1796"]["/V"] )
Q1797  =int(ff["Q1797"]["/V"] )
Q17101 =int(ff["Q17101"]["/V"])
Q17102 =int(ff["Q17102"]["/V"])
Q17103 =int(ff["Q17103"]["/V"])
Q17104 =int(ff["Q17104"]["/V"])
Q17105 =int(ff["Q17105"]["/V"])
Q17106 =int(ff["Q17106"]["/V"])
Q17107 =int(ff["Q17107"]["/V"])
Q17111 =int(ff["Q17111"]["/V"])
Q17112 =int(ff["Q17112"]["/V"])
Q17113 =int(ff["Q17113"]["/V"])
Q17114 =int(ff["Q17114"]["/V"])
Q17115 =int(ff["Q17115"]["/V"])
Q17116 =int(ff["Q17116"]["/V"])
Q17117 =int(ff["Q17117"]["/V"])
Q17121 =int(ff["Q17121"]["/V"])
Q17122 =int(ff["Q17122"]["/V"])
Q17123 =int(ff["Q17123"]["/V"])
Q17124 =int(ff["Q17124"]["/V"])
Q17125 =int(ff["Q17125"]["/V"])
Q17126 =int(ff["Q17126"]["/V"])
Q17127 =int(ff["Q17127"]["/V"])

basic_info={
    "Postal code": [Q11],
    "Type of residential home": [Q2_1],
    "Type of residential home (other)": [Q22],
    "Number of people living in home": [Q31],
    "Footprint area of your residential home": [Q41],
    "Footprint area of your residential home (other)": [Q42],
    "Storeys in your residential home are heated and/or cooled": [Q51],
    "Storeys in your residential home are heated and/or cooled (other)": [Q52],
    "Type of space heating system": [Q61],
    "Type of space heating system (other)": [Q62],
    "Type of space cooling system:": [Q71],
    "Type of space cooling system (other):": [Q72],
    "Type of water heating system": [Q81],
    "Type of water heating system (other)": [Q82],
    "Type of stove/oven system": [Q91],
    "Type of stove/oven system (other)": [Q92],
    "Electric car charged by electricity": [Q101],
    "Fire place powered by natural gas": [Q102],
    "Swimming pool, sauna, etc.": [Q103],
    "No uncommon devices": [Q104],
    "Uncommon devices (other)": [Q105],
    "Residential home built year": [Q111],
    "Residential home retrofit year": [Q121],
    "Leak proof": [Q131],
    "Leak proof (Specifics)": [Q132],
    "Windows": [Q133],
    "Windows (Specifics)": [Q134],
    "Furnace": [Q135],
    "Furnace (Specifics)": [Q136],
    "Insulation": [Q137],
    "Insulation (Specifics)": [Q138],
    "Photovoltaic": [Q139],
    "Photovoltaic (Specifics)": [Q1310],
    "Heat pump": [Q1311],
    "Heat pump (Specifics)": [Q1312],
    "Solar thermal": [Q1313],
    "Solar thermal (Specifics)": [Q1314],
    "Thermal energy storage": [Q1315],
    "Thermal energy storage (Specifics)": [Q1316],
    "Green roof": [Q1317],
    "Green roof (Specifics)": [Q1318],
    "Other retrofits": [Q1319],
    "Other retrofits (Specifics)": [Q1320]
}

basic_information= pd.DataFrame(basic_info)

natural_gas={
    "start-YYYY":[Q1511,Q1521,Q1531,Q1541,Q1551,Q1561,Q1571,Q1581,Q1591,Q15101,Q15111,Q15121],
    "start-MM":[Q1512,Q1522,Q1532,Q1542,Q1552,Q1562,Q1572,Q1582,Q1592,Q15102,Q15112,Q15122],
    "start-DD":[Q1513,Q1523,Q1533,Q1543,Q1553,Q1563,Q1573,Q1583,Q1593,Q15103,Q15113,Q15123],
    "end-YYYY":[Q1514,Q1524,Q1534,Q1544,Q1554,Q1564,Q1574,Q1584,Q1594,Q15104,Q15114,Q15124],
    "end-MM":[Q1515,Q1525,Q1535,Q1545,Q1555,Q1565,Q1575,Q1585,Q1595,Q15105,Q15115,Q15125],
    "end-DD":[Q1516,Q1526,Q1536,Q1546,Q1556,Q1566,Q1576,Q1586,Q1596,Q15106,Q15116,Q15126],
    "natural_gas_consumption":[Q1517,Q1527,Q1537,Q1547,Q1557,Q1567,Q1577,Q1587,Q1597,Q15107,Q15117,Q15127]
}
natural_gas_consumption = pd.DataFrame(natural_gas)
natural_gas_consumption.plot(x="start-MM",y="natural_gas_consumption")

electricity_consumption={
   "start-YYYY":[Q1711,Q1721,Q1731,Q1741,Q1751,Q1761,Q1771,Q1781,Q1791,Q17101,Q17111,Q17121],
    "start-MM":[Q1712,Q1722,Q1732,Q1742,Q1752,Q1762,Q1772,Q1782,Q1792,Q17102,Q17112,Q17122],
    "start-DD":[Q1713,Q1723,Q1733,Q1743,Q1753,Q1763,Q1773,Q1783,Q1793,Q17103,Q17113,Q17123],
    "end-YYYY":[Q1714,Q1724,Q1734,Q1744,Q1754,Q1764,Q1774,Q1784,Q1794,Q17104,Q17114,Q17124],
    "end-MM":[Q1715,Q1725,Q1735,Q1745,Q1755,Q1765,Q1775,Q1785,Q1795,Q17105,Q17115,Q17125],
    "end-DD":[Q1716,Q1726,Q1736,Q1746,Q1756,Q1766,Q1776,Q1786,Q1796,Q17106,Q17116,Q17126],
    "electricity_consumption":[Q1717,Q1727,Q1737,Q1747,Q1757,Q1767,Q1777,Q1787,Q1797,Q17107,Q17117,Q17127]
}
electricity_consumption = pd.DataFrame(electricity_consumption)
electricity_consumption.plot(x="start-MM",y="electricity_consumption")

plt.show()

print('Basic Information: ', basic_info)
print('Natural Gas Consumption: ', natural_gas_consumption)
print('Electricity Consumption: ', electricity_consumption)


