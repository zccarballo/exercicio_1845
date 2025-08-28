const {db} = require('./datos.js');

/*
--EXER1
SELECT * FROM customers WHERE City LIKE '%on' OR City LIKE '%as';

--EXER2
SELECT Total, Total * 0.10 + Total AS 'Total actualizado'
FROM invoices;

--EXER3 
CREATE TABLE artista_album AS
SELECT 
    artists.ArtistId,
    artists.Name,
    albums.AlbumId,
    albums.Title
FROM 
    artists
JOIN 
    albums ON artists.ArtistId = albums.ArtistId;

--EXER4
CREATE TABLE cancion_playlist_autor AS
SELECT 
    tracks.TrackId,
    tracks.Name AS TrackName,
    playlist_track.PlaylistId,
    artista_album.ArtistId,
    artista_album.Name as ArtistaName
FROM 
    playlist_track
JOIN 
    tracks ON playlist_track.TrackId = tracks.TrackId
JOIN 
    artista_album ON tracks.AlbumId = artista_album.AlbumId
    
select * from cancion_playlist_autor 

--EXER5
select InvoiceId from invoices where BillingCity = 'London'
--EXER6
SELECT 
    tracks.TrackId,
    invoice_items.TrackId AS InvoiceTrackId,
    invoices.InvoiceId,
    customers.CustomerId
FROM 
    playlist_track
JOIN 
    tracks ON playlist_track.TrackId = tracks.TrackId
JOIN 
    invoice_items ON tracks.TrackId = invoice_items.TrackId
JOIN
	invoices ON invoice_items.InvoiceId = invoices.InvoiceId
JOIN
	customers ON invoices.CustomerId = customers.CustomerId;
--EXER7
select sum(Total)
from invoices
where BillingCity = 'London'

--EXER8
select count(AlbumId)
from albums
--EXER9
SELECT Country,
COUNT(*) AS CantidadClientes
FROM customers
GROUP BY Country;

--EXER10
SELECT Country,
COUNT(*) AS CantidadClientes
FROM customers
GROUP BY Country HAVING COUNT(*) > 3
ORDER BY CantidadClientes

--EXER11
SELECT
tracks.Composer,
tracks.Name,
tracks.MediaTypeId, 
media_types.Name AS TipoMedia
FROM media_types 
JOIN tracks ON media_types.MediaTypeId = tracks.MediaTypeId 
WHERE Composer = 'AC/DC'

--EXER12
SELECT CustomerId, Total
FROM invoices
WHERE Total = (SELECT MAX(Total) FROM invoices);

--EXER13
SELECT
CustomerId,
sum(Total)
FROM invoices
GROUP BY CustomerId 

--EXER14
SELECT
City,
count(EmployeeId) AS CantidadEmpleados
FROM employees
GROUP BY City

--EXER15
SELECT 
artists.ArtistId, 
artists.Name,
albums.Title
FROM artists
JOIN albums ON albums.ArtistId = artists.ArtistId
ORDER BY albums.Title

--EXER16
SELECT
invoices.CustomerId,
customers.FirstName,
customers.LastName,
ROUND(avg(invoices.Total), 2) AS MediaFacturas
FROM customers
JOIN invoices ON customers.CustomerId = invoices.CustomerId
GROUP BY invoices.CustomerId

*/






